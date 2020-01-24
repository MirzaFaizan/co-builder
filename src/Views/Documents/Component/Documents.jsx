import React from "react";
import DocumentTable from "./DocumentTable";
import Api from "../../../ApiCalls/api";
import Notification from "../../../Components/Notification";
import Loader from "../../../Components/TableLoader";
import { InfoContext } from "../../../Context/AuthContext";
export default function Documents() {
  // const { info } = React.useContext(InfoContext);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("error while signup");
  const [type, setType] = React.useState("error");
  const [addFolderTitle, setFolderTitle] = React.useState("");
  React.useEffect(() => {
    setLoading(true);
    Api.getDocuments()
      .then(res => {
        setLoading(false);
        console.log(res.data);
        if (res.data.documents === "No Documents exist for user.") {
          setData([]);
        } else setData(res.data.documents);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  // detele folder
  const deleteDocument = value => {
    const body = {
      creator: "user"
    };
    setLoading(true);
    Api.deleteDocumentFolder(value._id, body)
      .then(res => {
        setData(data.filter(item => item._id !== value._id));
        setLoading(false);
        setType("success");
        setOpen(true);
        setMessage(res.data.message);
        setTimeout(() => {
          setOpen(false);
        }, 2000);
        console.log(res);
      })
      .catch(err => {
        setLoading(false);
        setType("error");
        setOpen(true);
        setMessage("Error !!!");
        setTimeout(() => {
          setOpen(false);
        }, 2000);
        console.log(err);
      });
  };

  //add new folder
  const addNewFolder = () => {
    if (addFolderTitle.split("").length <= 4) {
      setType("error");
      setOpen(true);
      setMessage("please enter atleast 4 words for title");
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    } else {
      setLoading(true);
      let body = {
        folderName: addFolderTitle
      };
      Api.newDocuments(body)
        .then(res => {
          console.log(res);
          setLoading(false);
          setData([...data, res.data.documentFolder]);
        })
        .catch(err => {
          setLoading(false);
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="col-sm-12 bg-white p-2">
        <Notification open={open} type={type} message={message} />
        <div className="col-sm-12 pt-3">
          <div className="col-sm-12 pt-2 d-flex justify-content-between">
            <div className="col-sm-8">
              <h3 className="font-weight-bold mb-3 custom-text-gold ">
                Documents
              </h3>
              <div class=" col-sm-5 p-1 mt-2 mt-md-0 p-2 text-capitalize border">
                <form class="d-flex align-items-center">
                  <input
                    class="form-control border-0 form-control-sm mr-3 w-100"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <i class="fas fa-search" aria-hidden="true"></i>
                </form>
              </div>
            </div>
            <div className="col-sm-4 p-0 d-flex flex-row-reverse">
              <div className="d-flex flex-row h-fit-content">
                <div className="border mr-3">
                  <form class="d-flex align-items-center p-2">
                    <input
                      class="form-control border-0 form-control-sm mr-3 w-100"
                      type="text"
                      placeholder="Enter Folder Title"
                      aria-label="Folder title"
                      onChange={e => setFolderTitle(e.target.value)}
                    />
                    <i class="far fa-folder"></i>
                  </form>
                </div>

                <button
                  class="btn btn-info btn-round m-0"
                  onClick={addNewFolder}
                >
                  {loading ? (
                    <div class="spinner-border text-light" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "Add New"
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 m-3">
            {loading ? (
              <Loader />
            ) : (
              <DocumentTable
                data={data}
                setData={setData}
                deleteDocument={deleteDocument}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
