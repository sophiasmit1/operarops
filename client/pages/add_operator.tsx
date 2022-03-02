import Head from "next/head";
import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import Image from 'next/image'
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Wrapper = styled.div`
    background: #EEF5FF;
    min-height: 100vh;
    width: 100%;
`

const BackBtn = styled.a`
    background: #FFFFFF;
    box-shadow:0px 10px 25px rgba(148, 174, 213, 0.15);
    border-radius: 10px;
    font-style: normal;
    font-weight: 600;
    font-size:16px;
    line-height:24px;
    color: #3260A1;
    padding:15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-top: 30px;
    outline:none;
    width:117px;
    height:45px;
    :hover{
        box-shadow:0px 0px 35px rgba(148, 174, 213, 1);
        transition: .3s all ease;
    }
`

const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    background: #FFFFFF;
    border-radius: 15px;
    padding: 30px;
    max-width: 500px;
    width: 100%;
`

const InputField = styled.div`
    display: flex;
    flex-direction:column;
    margin-bottom:15px;
`

const Input = styled.input`
    width:100%;
    display: flex;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 5px;
    outline: none;
    padding: 5px 10px;
`

const TextLabel = styled.div`
    font-style:normal;
    font-weight:300;
    font-size:18px;
    line-height:21px;
    color: #222222;
    margin-bottom: 5px;
`

const FormBtn = styled.button`
    width: 139px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
    background: #67BFFF;
    box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
    border-radius: 10px;
    border: none;
    margin: 0 auto;
    margin-top: 15px;
    cursor: pointer;
`

export default function AddOperator(){


    const [title, setTitle] = React.useState('')
    const [imgUrl, setImgUrl] = React.useState('')
    const router = useRouter()

    const addOperator = async () =>{
        try {
            await axios.post('http://localhost:5000/api/operator/add', {
                title, imgUrl
            })
            .then(() => router.push('/'))
        } catch (error) {
            console.log('3 проверка' + error)
        }
    }
 
    const [operator, setOperator] = useState('')
    const [nameDirty, setNameDirty] = useState(false);
    const [nameError, setNameError] = useState('Поле не может быть пустым1');
    const [formValid, setFormValid] = useState(false);
    
    useEffect(() => {
        if(nameError) {
           setFormValid(false)
        }else{
            setFormValid(true)
        }
    }, [nameError])


    const operatorHandler = (e:any) => {
        setOperator(e.target.value)
        setTitle(e.target.value)
        const re = /^[a-zA-Z0-9]+$/;
        if(!re.test((e.target.value).toLowerCase())){
            setNameError("Используйте латинские буквы.")
        }else{
            setNameError('')
        }
    }

    const blurHander = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        switch (e.target.name) {
            case 'operator':
                setNameDirty(true)
                 break;

        }
    }



    return(
    <Wrapper>
        <Head>
            <title>Добавить оператора</title>
        </Head>
        <NavBar />
        <div className="container">
        <Link href={"/"}passHref>
            <BackBtn>
            <Image
                src="/static/arrow.svg"
                alt="Picture of the author"
                width={24}
                height={15}
             />
             Назад
          </BackBtn>
          </Link>
            <FormWrapper>
                <Form >
                    <InputField>
                        <TextLabel>
                            Название оператора
                        </TextLabel>
                        {(nameDirty && nameError) && <div style={{color: 'red'}}> {nameError}</div>}
                        <Input onChange={e => operatorHandler(e)} value={operator} onBlur={e => blurHander(e)} name = 'operator' placeholder="Введите название оператора" type = 'string' />
                    </InputField>
                    <InputField>
                        <TextLabel>
                            Вставьте URL картинку оператора
                        </TextLabel>
                            <Input onChange={e =>setImgUrl(e.target.value)} placeholder="Вставьте URL картинку"/>
                    </InputField>
                    <FormBtn disabled = {!formValid} onClick={e => {e.preventDefault(); addOperator();}}> Добавить</FormBtn>
                </Form>
            </FormWrapper>
        </div>
    </Wrapper>
    )
}