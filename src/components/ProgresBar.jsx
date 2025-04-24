
function ProgreBar({ skills }) { 
    return (
        <div className="p-4 bg-light">
            <BTooltip
                text="Este componente muestra una lista de habilidades técnicas con barras de progreso."
            /> 
            {skills.map((skill) => (
                <BProgressBar
                    key={skill.skillName}
                    skillName={skill.skillName}
                    percentage={skill.percentage}
                    color={skill.color}
                />
            ))}
        </div>
    );
}

export default ProgreBar;