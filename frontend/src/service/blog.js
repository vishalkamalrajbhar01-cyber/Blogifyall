import axios from 'axios';


export const addBlog = async (data) => {
    let response = await axios.post('https://blogifyall.onrender.com/addblog', data)
    return response;
}


export const getAllBlog = async () => {
    let response = await axios.get('https://blogifyall.onrender.com/allblog')
    return response;
}

export const deleteBlog = async (id) => {
    const response = await axios.delete(
        `https://blogifyall.onrender.com/deleteblog/${id}`
    );

    return response;
};

export const getSingleBlogDetails = async (id) => {
    let response = await axios.get(`https://blogifyall.onrender.com/getblogbyid/${id}`)
    return response;
}

export const editBlog = async (id, data) => {
    let response = await axios.patch(`https://blogifyall.onrender.com/editblog/${id}`, data)
    return response;
}
