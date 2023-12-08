import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
// import htmlToDraft from "html-to-draftjs";
const htmlToDraft =
  typeof window === "object" && require("html-to-draftjs").default;
import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
} from "draft-js";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const draftToHtml =
  typeof window === "object" && require("draftjs-to-html").default;
// let Editor: any;

// if (Editorx) {
//   Editor = Editorx.Editor;
// }
// npm i html-to-draftjs @types/html-to-draftjs @types/draftjs-to-html react-draft-wysiwyg @types/react-draft-wysiwyg draft-js draftjs-to-html
type Props = {
  label?: string;
  defaultValue?: string;
  isSmall?: boolean;
  onChangeHandler?: (value: string) => void;
};

const RichText = ({
  defaultValue = "",
  onChangeHandler,
  label,
  isSmall,
}: Props) => {
  let contentState: any;

  const blocksFromHtml = htmlToDraft(defaultValue);
  const { contentBlocks, entityMap } = blocksFromHtml;
  contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);

  // const editorState = EditorState.createWithContent(contentState);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(contentState)
  );

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    sendContent();
  };
  const sendContent = () => {
    // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    onChangeHandler &&
      editorState &&
      onChangeHandler(
        draftToHtml(convertToRaw(editorState.getCurrentContent()))
      );
  };
  return (
    <div>
      <label
        className={`tw-block tw-text-n1 ${
          isSmall
            ? "tw-font-medium tw-mb-[.25rem]"
            : "tw-font-bold tw-mb-[0.625rem]"
        }`}
      >
        {label}
      </label>
      <Editor
        placeholder="Type Something"
        editorState={editorState}
        toolbarClassName="draftToolbar"
        wrapperClassName="draftWrapper"
        editorClassName="draftEditor"
        onEditorStateChange={handleEditorChange}
      />
    </div>
  );
};

export const RichTextDisplay = ({ defaultValue = "" }: Props) => {
  let contentState: any;

  const blocksFromHtml = htmlToDraft(defaultValue);
  const { contentBlocks, entityMap } = blocksFromHtml;
  contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);

  // const editorState = EditorState.createWithContent(contentState);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(contentState)
  );

  useEffect(() => {
    contentState && setEditorState(EditorState.createWithContent(contentState));
  }, [defaultValue]);

  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarHidden
        wrapperClassName="draftWrapper"
        editorClassName="draftEditor"
        readOnly
      />
    </div>
  );
};

export default RichText;
