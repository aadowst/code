import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { add } from "lodash";
import { addBug, getUnresolvedBugs, loadBugs, resolveBug } from "../bugs";
import configureStore from "../configureStore";

describe("bugsSlice", () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
    store = configureStore(); // store object has all middleware, but we don't care about those specifics
  });

  const bugsSlice = () => store.getState().entities.bugs; // helper function, which likely will be used numerous times
	const createState = () => ({
		entities: {
			bugs: {
				list: []
			}
		}
	})

  it("should add bug to the store if it's saved to the server", async () => {
    // Arrange
    const bug = { description: "a" };
    const savedBug = { ...bug, id: 1 };
    fakeAxios.onPost("/bugs").reply(200, savedBug); // fakeAxios replies with a success code and returns the savedBug object
    // Act
    await store.dispatch(addBug(bug));
    // Assert
    expect(bugsSlice().list).toContainEqual(savedBug);
  });

  it("should not add bug to the store if it's not saved to the server", async () => {
    // Arrange
    const bug = { description: "a" };
    fakeAxios.onPost("/bugs").reply(500); // fakeAxios replies with a success code and returns the savedBug object
    // Act
    await store.dispatch(addBug(bug));
    // Assert
    expect(bugsSlice().list).toHaveLength(0);
  });

	it("should mark the bug as resolved if it is saved to the server", async () => {
	
		fakeAxios.onPost("/bugs").reply(200, {id: 1})
		fakeAxios.onPatch("/bugs/1").reply(200, {id: 1, resolved: true})

		await store.dispatch(addBug({}))
		await store.dispatch(resolveBug(1))

		expect(bugsSlice().list[0].resolved).toBe(true)
	});

	it("should not mark the bug as resolved if it is not saved to the server", async () => {
	
		fakeAxios.onPost("/bugs").reply(200, {id: 1})
		fakeAxios.onPatch("/bugs/1").reply(500)

		await store.dispatch(addBug({}))
		await store.dispatch(resolveBug(1))

		expect(bugsSlice().list[0].resolved).toBeFalsy()  // alt is .not.toBe(true)
	});

	describe("Loading bugs", ()=>{
		describe("if the bugs exist in the cache", ()=> {
			it("they should not be fetched from server again", async () => {
				fakeAxios.onGet("/bugs").reply(200, [{ id: 1 }])

				await store.dispatch(loadBugs())
				await store.dispatch(loadBugs())

				expect(fakeAxios.history.get.length).toBe(1)  // Mock Adapter logs the types/numbers of http requests
			})

		})
		describe("if the bugs don't exist in the cache", ()=> {
			it("they should be fetched from the server and put in the store", async ()=>{
				fakeAxios.onGet("/bugs").reply(200, [{ id: 1 }])

				await store.dispatch(loadBugs())

				expect(bugsSlice().list).toHaveLength(1)
			})
			describe("loading indicator", ()=> {
				it("should be true while fetching bugs", ()=> {
					fakeAxios.onGet("/bugs").reply(() => {  // pass a function instead of specifying code and returned object
						expect(bugsSlice().loading).toBe(true)
						return [200, [{id: 1}]]
					})

					store.dispatch(loadBugs())
				})

				it("should be false after successfully fetching bugs", async ()=> {
					fakeAxios.onGet("/bugs").reply(200, [{id: 1}])

					await store.dispatch(loadBugs())

					expect(bugsSlice().loading).toBe(false)
				})

				it("should be false if server returns an error", async ()=> {
					fakeAxios.onGet("/bugs").reply(500)

					await store.dispatch(loadBugs())

					expect(bugsSlice().loading).toBe(false)
				})

				
			})
		})
	})


	// it("should load the bugs, if it has been 10 minutes from last call", async () => {
	// 	fakeAxios.onPost("/bugs").reply(200, {id: 1})
	// 	const state = createState()
	// 	state.entities.bugs.lastFetch = 0

	// 	await store.dispatch(addBug({}))
	// 	await store.dispatch(loadBugs())

	// 	expect(bugsSlice().list).toHaveLength(1)
	// });

	// it("should not load the bugs, if it has been less than 10 minutes from last call", async () => {
	// 	fakeAxios.onPost("/bugs").reply(200, {id: 1})
	// 	const state = createState()
	// 	state.entities.bugs.lastFetch = Date.now()

	// 	await store.dispatch(addBug({}))
	// 	await store.dispatch(loadBugs())

	// 	expect(bugsSlice().list).toHaveLength(0)
	// });

	describe("selectors", ()=> {
		it("getUnresolvedBugs", ()=>{
			// Arrange
			const state = createState()
			state.entities.bugs.list = [
				{ id: 1, resolved: true},
				{ id: 2},
				{ id: 3}
			]
			// Act
			const result = getUnresolvedBugs(state)
			// Assert
			expect(result).toHaveLength(2)
		})
	})
});
