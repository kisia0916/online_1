const move = (url)=>{
    history.replaceState('','',`/${url}`);
    analysis_url()
}