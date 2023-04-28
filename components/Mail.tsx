export default function Mail() {
    return (
        <div className="flex">
            <svg
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="24"
                viewBox="0 0 24 24">
                <path
                    d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
            </svg>
            <a href="mailto:alexcraviotto@pm.me" className='text-xl'>alexcraviotto@pm.me</a>
        </div>
    )
}