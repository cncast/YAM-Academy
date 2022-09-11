export const getTutorPrefix = (languaje, tutorGender) => {
    return {
        EN: {
            M: 'Mr.',
            F: 'Miss.'
        },
        FR: {
            M: 'M.',
            F: 'Mme.'
        },
        PR: {
            M: 'Mr.',
            F: 'Miss.'
        }
    }[languaje][tutorGender]
}