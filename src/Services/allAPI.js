import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";


//first request - Upload a video to the server - post -> req body

export const uploadVideo = async (reqBody) => {
    //make post http request to "http://localhost:3001/videos" to add video in json server return response to add component
    return await commonAPI("post", `${serverURL}/videos`,reqBody)
}

//get all videos from json server

export const getAllVideos = async () => {
    //make post http request to "http://localhost:3001/videos" to add video in json server return response to view component
    return await commonAPI("get", `${serverURL}/videos`, "")
}

//get a particular video from json server

export const getAVideo = async (id) => {
    //make post http request to "http://localhost:3001/videos/id" to add video in json server return response to VideoCard component
    return await commonAPI("get", `${serverURL}/videos/${id}`, "")
}

//delete a particular video

export const delAVideo= async(id)=>{
        //make post http request to "http://localhost:3001/videos" to add video in json server return response to View component

    return await commonAPI("delete",`${serverURL}/videos/${id}`,{})
}
//store watch history to json server
export const addToWatchHistory=async(videoDetails)=>{
    //make post http request to "http://localhost:3001/watch-history" to add video in json server return response to VideoCard component
       return await commonAPI("post",`${serverURL}/watch-history`,videoDetails)
}
//get watch-history from json server

export const getWatchHistory= async()=>{
        //make post http request to "http://localhost:3001/watch-history" to add video in json server return response to watch history component
return await commonAPI("get", `${serverURL}/watch-history`,"")
}

export const addCategories=async(reqBody)=>{
            //make post http request to "http://localhost:3001/category" to add category to json server return response to category component
return await commonAPI("post",`${serverURL}/category`,reqBody)
}

export const getCategories=async()=>{
                //make post http request to "http://localhost:3001/category" to get category from json server return response to category component

                return await commonAPI("get",`${serverURL}/category`,'')
}

export const deleteCategory=async(id)=>{
                    //make post http request to "http://localhost:3001/category" to delete category from json server return response to category component

    return await commonAPI("delete",`${serverURL}/category/${id}`,{})
}

export const updateCategory=async(id,body)=>{
return await commonAPI("put",`${serverURL}/category/${id}`,body)
}