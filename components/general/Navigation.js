import React, {useEffect, useState} from 'react';

const Navigation = ({categories, itemClick, activeCategory}) => {
    const [newCategories, setNewCategories] = useState(null);

    useEffect(() => {
        const allCat = {id: 0, name: 'All'};
        setNewCategories([allCat, ...categories])
    }, [categories])

    return (
        <section className="navigation">
            <div className="container">
                {newCategories && newCategories.map(category => {
                    return (
                        <div key={category.id}
                             className={activeCategory === category.name ? 'nav-item active' : 'nav-item'}
                             onClick={() => itemClick(category)}>
                            {category.name}
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Navigation;