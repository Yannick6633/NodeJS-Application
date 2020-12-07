const sportService = require('../service/sport.service');

const  sports = ['judo', 'ping-pong', 'tennis', 'football'];
const sportsAdhesion = [
    {name: 'judo', adhesion: 30000},
    {name: 'ping-pong', adhesion: 40000},
    {name: 'tennis', adhesion: 50000},
    {name: 'football', adhesion: 60000},
];

exports.list_sport = (req, res, next) => {
    res.status(200).json({ sports: sports });
}

exports.detail_sports = (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({ sports: sports[id] });
}

exports.list_sport_major = (req, res, next ) => {
    sportService.sportMajor(sportsAdhesion)
        .then(data => res.status(200).json(data))
        .catch(err => console.log(err))
}
