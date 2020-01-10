import React, { useContext } from "react";
import styled, { StyledComponent } from "styled-components";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidationType from "filepond-plugin-file-validate-type";
import FilePondPluginFileValidationSize from "filepond-plugin-file-validate-size";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import StateContext from "../../context/StateContext";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidationSize,
  FilePondPluginFileValidationType
);

const UploadBoxStyled = styled.div`
  padding: 100px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

interface FilePondExt extends FilePond {
  allowFileSizeValidation: boolean;
}

const FilePondStyled: StyledComponent<
  typeof FilePond,
  FilePondExt,
  any,
  never
> = styled(FilePond)`
  max-width: 400px;
  min-width: 300px;
`;
const UploadBox = () => {
  const { state, dispatch } = useContext(StateContext);
  const onProcessFileStart = () => {
    dispatch({ type: "fetchThumbnail" });
  };
  const onResponseFromServer = (data: any) => {
    dispatch({ type: "fetchThumbnailSuccessful", payload: data });
  };
  return (
    <UploadBoxStyled>
      <FilePondStyled
        allowFileSizeValidation
        maxFileSize="1MB"
        allowFileTypeValidation
        acceptedFileTypes={["image/*"]}
        labelFileTypeNotAllowed="Only images allowed"
        fileValidateTypeLabelExpectedTypes="Expects an image"
        onprocessfilestart={onProcessFileStart}
        server={{
          process: {
            url: "http://localhost:5000/generate-thumbnail",
            method: "POST",
            onload: onResponseFromServer
          }
        }}
        labelIdle='Drag & Drop your Image or <span class="filepond--label-action">Browse</span>'
      />
    </UploadBoxStyled>
  );
};

export default UploadBox;
