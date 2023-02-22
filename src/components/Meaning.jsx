export default function Meaning({
  partOfSpeech,
  definitions,
  synonyms,
  antonyms,
  pullWord,
}) {
  return (
    <div id="meaning_section" className="meaning_section section-1">
      <div id="meaning" className="meaning">
        <div id="title" className="title section">
          {partOfSpeech}
        </div>
        <div id="Meaning_text_title" className="light_bold section-1">
          Meaning
        </div>
        <ul className="definitions space-1">
          {definitions.map((item) => (
            <li key={Math.random()} className="definition space-0">
              <div className="definition_text">{item.definition}</div>
              {item.example && (
                <div className="example_section">
                  <q className="definition_example light_bold">
                    {item.example}
                  </q>
                </div>
              )}
            </li>
          ))}
        </ul>
        {!!synonyms.length && (
          <div className="synonyms flex-1 section-2">
            <div className="synonyms_title light_bold">Synonyms</div>
            {synonyms.map((syn) => (
              <div
                key={Math.random()}
                className="synonym link"
                onClick={() => pullWord(syn)}
              >
                {syn}
              </div>
            ))}
          </div>
        )}

        {!!antonyms.length && (
          <div className="antonyms flex-1 section-2">
            <div className="antonyms_title light_bold">Antonyms</div>
            {antonyms.map((ant) => (
              <div
                key={Math.random()}
                className="antonym link"
                onClick={() => pullWord(ant)}
              >
                {ant}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
