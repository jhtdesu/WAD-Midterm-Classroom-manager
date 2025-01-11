import express from 'express';
import { Student } from '../models/studentModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.sex ||
            !req.body.studentID ||
            !req.body.birthdate
        ) {
            return res.status(400).send({error: 'Data is missing'});
        } 

        const newStudent = {
            name: req.body.name,
            sex: req.body.sex,
            studentID: req.body.studentID,
            birthdate: req.body.birthdate,
        };

        const students = await Student.create(newStudent);

        res.status(201).send(students);

    } catch (error) {
        console.error(error);
        res.status(500).send({error: error.message});
}});

router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).send(students);
    } catch (error) {
        console.error(error);
        res.status(500).send({error: error.message});
    }});

router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).send({error: 'Student not found'});
        }
        res.status(200).send(student);
    } catch (error) {
        console.error(error);
        res.status(500).send({error: error.message});
    }});

router.put('/:id', async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.sex ||
            !req.body.studentID ||
            !req.body.birthdate
        ) {
            return res.status(400).send({error: 'Data is missing'});
        }
    
    const {id} = req.params;
    const result = await Student.findByIdAndUpdate(id, req.body);

    if (!result) {
        return res.status(404).send({error: 'Student not found'});
    }

    return res.status(200).send("Student updated successfully");

    }catch (error) {
        console.error(error);
        res.status(500).send({error: error.message});
    }});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Student.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({error: 'Student not found'});
        }

        return res.status(200).send("Student deleted successfully");

    } catch (error) {
        console.error(error);
        res.status(500).send({error: error.message});
    }});

export default router;