package com.aadowst.memento;

public class Editor {
	private String content;
	private String fontName;
	private int fontSize;


	public EditorState createState(){
		return new EditorState(content, fontName, fontSize);
	}

	public void restore(EditorState state){
		content = state.getContent();
		fontName = state.getFontName();
		fontSize = state.getFontSize();
	}

	public String getContent(){
		return content;
	}

	public void setContent(String content){
		this.content = content;
	}
	public String getFontName(){
		return fontName;
	}

	public void setFontName(String fontName){
		this.fontName = fontName;
	}

	public int getFontSize() {
    return fontSize;
  }

  public void setFontSize(int fontSize) {
    this.fontSize = fontSize;
  }

	public String toString(){
		return "content = " + content + " fontName = " + fontName + " fontSize = " + fontSize;
	}
}