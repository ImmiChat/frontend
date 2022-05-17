import { Autorenew, AccountCircle, ImageSearch, Tag, InsertEmoticon } from "@mui/icons-material";

const CreatePost = (props) => {
  return (
    <div className="w-75 m-auto pt-5 px-3">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="fs-4">Home</h5>
        <Autorenew className="icon"/>
      </div>
      <div className="d-flex ">
        <AccountCircle className="text-secondary col-2"style={{ width: "50px", height: "75px"}} />
          <form className="col-10 pt-3" >
              <input className='p-5 w-100 placeholder-xl border-light py-4 rounded'type="text" placeholder="What's on your mind?"/>
              <div className="d-flex justify-content-between align-items-center">
                <div >
                    <ImageSearch className="px-1 icon"/>
                    <Tag className="px-1 icon"/>
                    <InsertEmoticon className="px-1 icon"/>
                </div>
                <button className="rounded-pill btn post text-white px-5 py-2">Post</button>
              </div>
          </form>
      </div>
    </div>
  );
};

export default CreatePost;
