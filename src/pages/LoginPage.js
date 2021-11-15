import React from 'react'
import { useForm } from 'react-hook-form'
import { UserApi } from '../api/auth/usersApi'

const LoginPage = () => {
    const {register, handleSubmit, formState: { errors }} = useForm()
    const onHandleSubmit = async (data) => {
        try {
            await UserApi.login(data).then(dataUser => {
             UserApi.authenticated(dataUser.data, () => {
                 window.location.href = "/"
             })})
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("username")}/> <br/>
                <input type="password" {...register("password")}/> <br/>
                <button type="submit">Đăng nhập</button>
            </form>
        </div>
    )
}

export default LoginPage
