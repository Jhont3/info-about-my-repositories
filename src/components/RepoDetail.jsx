export const RepoDetail = (props) => {
  const totalLines = Object.values(props.infoRepo.languages).reduce((acc, value) => {
      return acc + value;
    });

  const percentageLangLines = Object.entries(props.infoRepo.languages).map(
    ([key, value]) => {
      return {
        name: key,
        percentage: (value * 100) / totalLines,
      };
    }
  );

  return (
    <>
      <h1>Detalles del repositorio</h1>
      <h3>Titulo repo: {props.infoRepo?.name || "No se encontró titulo disponible"}</h3>
      <p>Descripción: {props.infoRepo?.description || "No se encontró descripción disponible"}</p>
      <div>
        {percentageLangLines.map((lang) => {
          return (
            <div key={lang.name}>
              <span>{lang.name}</span>&nbsp;
              <span>{lang.percentage.toFixed(2)} %</span>
            </div>
          );
        })}
      </div>

      {/* {Object.entries(props.infoRepo.languages).map(([key, value]) => {
        return <div key={key}>{key}: {value} lineas</div>
        Sin funcion / porcentajes
      })} */}
    </>
  );
};
