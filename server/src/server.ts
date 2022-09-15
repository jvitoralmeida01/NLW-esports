import express from 'express';
import { PrismaClient } from '@prisma/client'; 
import cors from 'cors'
import convertHourStringToMin from './utils/convertHourStringToMin';
import convertMinutesToHourString from './utils/convertMinutesToHourString';

const app = express()
app.use(express.json())
// block some domains to make requests
app.use(cors())

const prisma = new PrismaClient()

app.get('/games', async (req, res) => {

    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    })

    return res.status(200).json(games)

})

app.post('/games/:id/ads', async (req, res) => {

    const gameID = req.params.id
    const body = req.body

    // Validação

    const ad = await prisma.ad.create({
        data: {
            gameId:             gameID,
            name:               body.name,
            discord:            body.discord,
            weekDays:           body.weekDays.join(','),
            useVoiceChannel:    body.useVoiceChannel,
            yearsPlaying:       body.yearsPlaying,
            hourStart:          convertHourStringToMin(body.hourStart),
            hourEnd:            convertHourStringToMin(body.hourEnd),
        }
    })

    return res.status(201).json(ad)

})

app.get('/games/:id/ads', async (req, res) => {

    const gameID = req.params.id
    
    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {
            gameId: gameID,
        },
        orderBy: {
            createdAt: `desc`
        }
    })

    return res.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToHourString(ad.hourStart),
            hourEnd: convertMinutesToHourString(ad.hourEnd),
        }
    }))
})

app.get('/ads/:id/discord', async (req, res) => {

    const adID = req.params.id

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adID
        }
    })
     
    return res.json({
        discord: ad.discord
    })
})

app.listen(3333)