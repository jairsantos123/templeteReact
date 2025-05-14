import "./Features.css";

export default function Features() {
    const featuresList = [
        {
            id: 1,
            title: "Componentes Basicos",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum."
        },
        {
            id: 2,
            title: "Lorem, ipsum.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ipsam nam!"
        },
        {
            id: 3,
            title: "Lorem, ipsum dolor.",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing."
        },
    ]

    return (
        <section className="features">
            <h2>Chaves das Features</h2>
            <div className="features-grid">
                {featuresList.map((feature) => {
                    <div className="features-card" key={feature.id}>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                })}
                
            </div>
        </section>
    )
}