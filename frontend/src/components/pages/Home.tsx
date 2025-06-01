import { useState, useEffect } from 'react';
import './Home.css';

function AnimatedText({ text, animationClass }: { text: string; animationClass: string }) {
    // drop-in系とwave系は文字単位で分割＆遅延付ける
    if (animationClass === 'drop-in' || animationClass === 'wave') {
        return (
            <h1 className="home-container">
                {text.split('').map((char, i) => (
                    <span
                        key={i}
                        className={animationClass}
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        {char}
                    </span>
                ))}
            </h1>
        );
    }

    // それ以外はクラス名だけ付けて表示
    return <h1 className={`${animationClass} home-container`}>{text}</h1>;
}

function Home() {
    // const animationClasses = ['typewriter', 'fade-in-title', 'scale-up-title', 'drop-in', 'wave'];
    const animationClasses = ['fade-in-title', 'scale-up-title', 'drop-in', 'wave'];

    const [animationClass, setAnimationClass] = useState(() => {
        // 初回ランダム選択
        return animationClasses[Math.floor(Math.random() * animationClasses.length)];
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimationClass(prevClass => {
                // 以前のクラスと異なるクラスをランダムに選ぶ
                let newClass;
                do {
                    newClass = animationClasses[Math.floor(Math.random() * animationClasses.length)];
                } while (newClass === prevClass);
                return newClass;
            });
        }, 30000);

        // クリーンアップ
        return () => clearInterval(intervalId);
    }, []);

    const text = 'KatLab：入退室管理サービス';

    return <AnimatedText text={text} animationClass={animationClass} />;
}

export default Home;
