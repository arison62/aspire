

const TeamsCard = ({img, title, desc} : {img : string, title : string, desc : string}) => {
  return (
    <div className="w-fit">
        <img src={img} alt="" className="w-auto 2"/>
        <p className="text-xl font-medium mt-4 text-center">{title}</p>
        <p className="text-slate-400 mt-1 text-center">{desc}</p>
    </div>
  )
}

export default TeamsCard