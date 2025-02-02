export const getProducts = async()=>{
    const response = await fetch("http://localhost:8081/getProducts");
    const data = response.json();
    return data;
}