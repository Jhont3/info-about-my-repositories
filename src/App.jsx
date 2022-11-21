import { useState } from "react";
import { RepoDetail } from "./components/RepoDetail";
import { SelectRepo } from "./components/SelectRepo";

function App() {

  const [infoRepo, setinfoRepo] = useState();

  // ver todos los repos en https://api.github.com/users/jhont3/repos

  async function handleFetchSelectRepo(repo) {
    // console.log(repo); // seleccion del cmte hijo
    const response = await fetch(`https://api.github.com/repos/jhont3/${repo}`);
    const data = await response.json();

    const responseLanguages = await fetch(`https://api.github.com/repos/jhont3/${repo}/languages`);
    const languages = await responseLanguages.json();

    setinfoRepo({
      ...data,
      languages: languages
    });

    // TODO
    //{
    //   data,
    //   languagesJson: languagesJson,
    //   isLoading: false,
    //   hasError: false,
    // }

  }

  return (
    <>
      <h1>LISTA DE REPOSITORIOS</h1>
      <hr />
      <SelectRepo onChange={handleFetchSelectRepo} />
      { infoRepo ? <RepoDetail infoRepo={infoRepo}/> : undefined }
    </>
  );
}

export default App;
