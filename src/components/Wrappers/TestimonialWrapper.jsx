export const TestimonialWrapper = ({children}) => {
    const div = <>
        <div className={" flex flex-col max-w-8xl mx-auto px-4 sm:px-6 md:px-8 my-10"}>
            {children}
        </div>
    </>;
    return div

}