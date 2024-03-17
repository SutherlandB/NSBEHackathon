

export async function outputConvo(data: any){
    console.log(data);

    return (

        <div id = "outputConvo">
          <div id = "score">
            Score: {data.score}
            </div>
          <div id = "condensedExp">
            Short Explanation: {data.condensedExplanation}
          </div>
          <div id = "deeperExp"> 
          Deep Explanation: {data.deepExplanation}
          </div>
        </div>
    )
}

