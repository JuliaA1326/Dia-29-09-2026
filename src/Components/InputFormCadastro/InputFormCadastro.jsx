function InputFormCadastro(props) {

  return (
    <>
    ,<label> {props.label}</label>
        <input style={props.style} type={props.type} placeholder={props.placeholder} />
    </>
  )
}

export default  InputFormCadastro