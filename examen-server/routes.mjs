import express from 'express'
import { FavouriteList, Video } from './repository.mjs'
import {
    getRecords, postRecord, deleteRecords,
    getRecord, headRecord, putRecord, patchRecord, deleteRecord
} from './service.mjs'

const router = express.Router()

router.route('/lists')
    .get(async(request,response)=> getRecords(FavouriteList, request, response))
    .post(async(request,response)=> postRecord(FavouriteList, request, response))
    .delete(async(request,response)=> deleteRecords(FavouriteList, request, response))

router.route('/lists/:id')
    .get(async(request,response)=> getRecord(FavouriteList, request, response))
    .head(async(request,response)=> headRecord(FavouriteList, request, response))
    .put(async(request,response)=> putRecord(FavouriteList, request, response))
    .patch(async(request,response)=> patchRecord(FavouriteList, request, response))
    .delete(async(request,response)=> deleteRecord(FavouriteList, request, response))

router.route('/lists/:id/videos')
    .get(async(request,response)=> getRecords(Video, request, response))
    .post(async(request,response)=> postRecord(Video, request, response))
    .delete(async(request,response)=> deleteRecords(Video, request, response))

router.route('/lists/:id/videos/:id')
    .get(async(request,response)=> getRecord(Video, request, response))
    .head(async(request,response)=> headRecord(Video, request, response))
    .put(async(request,response)=> putRecord(Video, request, response))
    .patch(async(request,response)=> patchRecord(Video, request, response))
    .delete(async(request,response)=> deleteRecord(Video, request, response))

export default router