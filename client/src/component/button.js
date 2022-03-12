


function Button ( {trueOrfalse, word} ) {

   

  return (
    <div>

      <button onClick={() => trueOrfalse(word)}>

        {word}

      </button>
    </div>
  );
}
export default Button;
