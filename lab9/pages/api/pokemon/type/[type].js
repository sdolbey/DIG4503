import pokemon from 'json-pokemon';

export default (req, res) => {

    let results = [{"error": "Could not find Pokemon with that type"}];

    const type = req.query.type;

    for (let i = 0; i < pokemon.length; i++) {
        for (let j = 0; j < pokemon[i].typeList.length; j++) {
            if (pokemon[i].typeList[j] == type) results.push(pokemon[i]);
        }
    }

    if (results.length > 1) results.shift();
    console.log(results);
    res.json(results);

}