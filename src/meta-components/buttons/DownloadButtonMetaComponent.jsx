import {Link} from "react-router-dom";
import {API_CONFIG, BACK_END_URL} from "../../config/config";

export const DownloadButtonMetaComponent = ({label,fileUUID}) => {

    const fileDownload =  (file_uuid) => {
        const url = BACK_END_URL + API_CONFIG.ENDPOINTS.FILE + `?uuid=${file_uuid}`;
        fetch(url).then((response) => {
            response.blob().then((blob) => {

                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "research.pdf";
                alink.click();
            });
        });
    }

    return (
        <li className="flex-grow my-3">
            <button
                onClick={() => fileDownload(fileUUID)}
                className={
                    "w-full flex items-center justify-center rounded-md bg-sky-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                }
            >
                {label}
            </button>
        </li>


    )
}