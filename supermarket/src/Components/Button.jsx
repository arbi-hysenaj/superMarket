export default function Button(props){
    const {outline,className,children,...rest} = props;
    return (
        <button {...rest} className={`btn ${outline ? "btn-outline" : "btn-default"} ${className ? className : ""}`}>{children}</button>
    )
}

{/* <div style={{display: "flex", alignItems: "center", gap: "20px", flexWrap:"wrap"}}>
<Button>Normal</Button>
<Button outline>Outline</Button>
<Button className="extra-class" onClick={handleButtonClick}>Customizable</Button>
</div>
<div style={{display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap"}}>
  <Input placeholder="First name" />
  <Input placeholder="Last name" onInput={handleLastNameInput} />
  <Input placeholder="Email" type="email" required />
</div> */}