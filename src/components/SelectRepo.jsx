import { useEffect, useState } from "react";

export const SelectRepo = (props) => {

    const url = "https://api.github.com/users/jhont3/repos";
    const [repoName, setrepoName] = useState([])

    const getNameRepo = async () => {
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            // console.log(data);
            setrepoName(data.map((repo) => repo.name))
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getNameRepo()    
    }, [])

    function handleSelect(event) {
        return props.onChange(event.target.value);
    }

  return (
    <>
        <select onChange={handleSelect}>
            {repoName.map((repo) => <option key={repo} value={repo}>{repo}</option> )}
        </select>
    </>
  )
}
