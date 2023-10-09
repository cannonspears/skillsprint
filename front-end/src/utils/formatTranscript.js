const digits = '0123456789'

export function formatTranscript(text) {
    const splitText = text.split(':')

    const trimmedSplitText = splitText.map((str) => {
        if (str.length < 3) {
            return str
        }

        let start

        if (!digits.includes(str[0])) {
            start = 0
        } else {
            for (let i = 0; i < str.length; i++) {
                if (str[i] === ' ') {
                    start = i + 1
                    break
                }
            }
        }

        let end

        if (!digits.includes(str[str.length - 1])) {
            end = str.length
        } else {
            for (let i = str.length - 1; i >= 0; i--) {
                if (str[i] === ' ') {
                    end = i
                    break
                }
            }
        }

        return str.slice(start, end)
    })

    return trimmedSplitText.slice(1).join(' ')
}
