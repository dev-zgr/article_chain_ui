export const InfoCardMetaComponent = ({label, value}) => {
    return (
        <>
            <label>
                <span className={"font-semibold text-slate-900"}>{label}</span>
            </label>
            <span className={"text-slate-400"}>{value}</span>
        </>
    )
}