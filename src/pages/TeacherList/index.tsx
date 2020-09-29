import React, { FormEvent, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';
import './styles.css';

import memeImg from '../../assets/images/meme.png';
import chooseImg from '../../assets/images/choose.png';

function TeacherList() {

    const [teachers, setTeachers] = useState([]);
    const [isThereTeacher, setIsThereTeacher] = useState(true);
    const [loading, setLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(true);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();
            
        const response = await api.get('/classes', {            
            params: {
                subject,
                week_day,
                time,
            }
        });       
        setTeachers(response.data);
        setIsEmpty(false);

        if(response.data.length < 1){
            setIsThereTeacher(false);
        } else {
            setIsThereTeacher(true);
        }        
    }
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Inglês', label: 'Inglês' },
                            { value: 'Sociologia', label: 'Sociologia' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Química', label: 'Química' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => setWeekDay(e.target.value)}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />
                    <button type='submit'>Buscar</button>
                </form>
            </PageHeader>

            <main>
                {isEmpty && 
                    <div className="warning" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 40
                    }}>
                        <img src={chooseImg} alt=""/>
                        <span>Selecione a matéria que quer aprender, o melhor dia e o horário... </span>
                    </div>
                }
                {teachers && teachers.map(teacher => (
                    <TeacherItem key={teacher['id']} teacher={teacher} />
                ))}
                {!isThereTeacher && 
                    <div className="warning" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 40
                    }}>
                        <img src={memeImg} alt=""/>
                        <h2>Ops...</h2>
                        <span>There is no Teacher available...</span>
                    </div>
                }
            </main>
        </div>
    );
}

export default TeacherList;