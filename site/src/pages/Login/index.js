import { Button } from 'antd'
import { getdata } from '@/api/api'

const Login = () => (
    <div>
        <Button type="primary" onClick={()=>{
            getdata().then(res=>{
                console.log(res)
                console.log(res.homePage);
            })
        }}>Button</Button>
    </div>
)
export default Login