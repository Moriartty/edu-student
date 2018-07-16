import pic from 'img/crack.jpg';

class Err403 extends React.Component {
    render(){
        return (
            <div className="text-center">
                <h1 style={{fontSize:210,fontWeight:900,lineHeight:'210px',fontFamily:'cursive, sans-serif',color:'#455a64',marginBottom:16}}>403</h1>
                <h3 style={{fontSize:21,lineHeight:'30px',color:'#455a64'}}>权限错误！</h3>
                <p style={{margin:30,color:'#99abb4'}}>你没有访问当前页面的权限。若有需要，请联系管理开放该页面。</p>
                <img src={pic}/>
            </div>
        )
    }
}

module.exports = Err403;