import React from "react";
// import { Link } from "react-router-dom";

// import BreadCrumb from "../../atoms/Breadcrumb/breadCrumb";
// import FormWizard from "../../molecules/formWizard/formWizard";

import "./_addItem.scss";


function AddItem() {
    return (
        <div className="container_global_additem">
            <section className="box_form">
                <article className="box_for_text">
                    <h2>
                        Parce que chaque thème est important pour une nouvelle France !
                    </h2>
                    <p>
                        Grâce à cette interface, il vous est facile de gérer les items
                        présent sur le site-web ! N'hésitez pas à faire remonter à
                        l'équipe technique le moindre problème rencontrés afin que ceux-là
                        soit mis à jour au plus vite !
                    </p>
                </article>
                <article className="box_for_form">
                    {/* <FormWizard
                    /> */}
                </article>
            </section>
        </div>
    );
}

export default AddItem;