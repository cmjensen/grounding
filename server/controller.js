let sight = []
let taste = []
let smell = []
let hear = []
let touch = []


module.exports = {
    getAnchor: (req, res) => {
        const { sense } = req.params
        if (sense === 'sight') {
            res.status(200).send(sight)
        } else if (sense === 'taste') {
            res.status(200).send(taste)
        } else if (sense === 'smell') {
            res.status(200).send(smell)
        } else if (sense === 'hear') {
            res.status(200).send(hear)
        } else if (sense === 'touch') {
            res.status(200).send(touch)
        }
    },

    addAnchor: (req, res) => {
        const { sensoryData } = req.body
        const { sense } = req.params
        if (sense === 'sight') {
            sight.push(sensoryData)
            res.status(200).send(sight)
        } else if (sense === 'taste') {
            taste.push(sensoryData)
            res.status(200).send(taste)
        } else if (sense === 'smell') {
            smell.push(sensoryData)
            res.status(200).send(smell)
        } else if (sense === 'hear') {
            hear.push(sensoryData)
            res.status(200).send(hear)
        } else if (sense === 'touch') {
            touch.push(sensoryData)
            res.status(200).send(touch)
        }
    },
    updateAnchor: (req, res) => {
        const { sensoryData } = req.body
        const { sense } = req.params
        if (sense === 'sight') {
            sight = [...sight, sensoryData]
            res.status(200).send(sight)
        } else if (sense === 'taste') {
            taste = [...taste, sensoryData]
            res.status(200).send(taste)
        } else if (sense === 'smell') {
            smell = [...smell, sensoryData]
            res.status(200).send(smell)
        } else if (sense === 'hear') {
            hear = [...hear, sensoryData]
            res.status(200).send(hear)
        } else if (sense === 'touch') {
            touch = [...touch, sensoryData]
            res.status(200).send(touch)
        }
    },
    deleteAnchor: (req, res) => {
        const { sense } = req.params
        if (sense === 'sight') {
            sight.splice(0, sight.length)
            res.status(200).send(sight)
        } else if (sense === 'taste') {
            taste.splice(0, taste.length)
            res.status(200).send(taste)
        } else if (sense === 'smell') {
            smell.splice(0, smell.length)
            res.status(200).send(smell)
        } else if (sense === 'hear') {
            hear.splice(0, hear.length)
            res.status(200).send(hear)
        } else if (sense === 'touch') {
            touch.splice(0, touch.length)
            res.status(200).send(touch)
        }
    }
}