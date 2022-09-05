import { useState } from 'react';
const Tab = props => {
    
    const { tabsData } = props
    
    const [content, setContent] = useState("");

    const filterContent = (clickedIndex) => {
        return (
            tabsData.map((tab) => {
                return (tab.content)
            }).filter((item, index) => {
                return index === clickedIndex
            }
            ))

    }


    const handleClick = (event, index = 1) => {
        const contentData = filterContent(index);
        setContent(contentData);
    }

    return (
        <>
            <div style={{ display: 'flex', width: 400, justifyContent: "space-between" }}>
                {

                    tabsData.map((tab, index) => {
                        return (
                                <button key={index} onClick={(e) => { handleClick(e, index) }}>{tab.label}</button>
                        )

                    })
                }
            </div>
            <div>
                <hr />
                <p>
                    {content}

                </p>
            </div>
        </>
    )

}

export default Tab;