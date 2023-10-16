
export default function CartMemes ({title, img}) {
 
    return <div>
        <h2>{title}</h2>
        {img.includes('jpg') ? <img src={`/images/${img}`} alt="Day in programmer's life"/> : <video src={img} autoPlay="true" loop/>}  

        
    </div>
}