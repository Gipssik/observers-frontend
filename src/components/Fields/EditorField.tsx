import React, { FC, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface EditorField {
  setFieldValue: (val: string) => void;
  value?: string;
}

const EditorField: FC<EditorField> = ({ setFieldValue, value }) => {
  const [editorState, setEditorState] = useState<any>();
  const editorDefaultState = value
    ? EditorState.createWithContent(
        // @ts-ignore
        ContentState.createFromBlockArray(convertFromHTML(value))
      )
    : null;

  const onEditorStateChange = (editorState: EditorState) => {
    const forFormik = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setFieldValue(forFormik);
    setEditorState(editorState);
  };

  return (
    <Editor
      wrapperClassName="editor-wrapper"
      editorClassName="editor-text"
      toolbarClassName="text-primaryBg"
      onEditorStateChange={onEditorStateChange}
      {...(editorDefaultState && { defaultEditorState: editorDefaultState })}
    />
  );
};

export default EditorField;
