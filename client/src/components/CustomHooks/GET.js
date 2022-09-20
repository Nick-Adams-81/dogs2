

const get = (url, setData) => {

    fetch(url)
            .then(res => res.json())
            .then(result => setData(result))
            .catch(err => console.log(err))
}

export default get