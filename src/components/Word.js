import React from 'react';
import "./Word.css"

const Word  = props => (
<li>Slowo po angielsku : <strong>{props.english}</strong> tlumaczenie: <strong>{props.polish}</strong> </li> 
)

export default Word;