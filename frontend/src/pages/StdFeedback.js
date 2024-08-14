import React from "react";
import FormfacadeEmbed from "@formfacade/embed-react";

function StdFeedback() {
    return (
        <div className="StdFeedback">
            <FormfacadeEmbed formFacadeURL="https://formfacade.com/include/114263473642157075615/form/1FAIpQLSco4my-dWlYBKcR3fe9bNhTCgGGbl0ZxbtFtfGDNekMd66kWA/classic.js/?div=ff-compose"
                onSubmitForm={() => console.log('Form submitted')}
            />
        </div>
    );
}
export default StdFeedback;