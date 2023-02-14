export default function Input(props) {
    const {placeholder,type,className,required,...rest} = props;
    
    return (
        <label className="label">
            {placeholder}
            {required && <span className="input-required">*</span>}
            <div>
                <input {...rest} required={required} className={`input ${className ? className : ""}`} type={type ? type : "text"} placeholder={placeholder} />
            </div>
        </label>
    );
}
