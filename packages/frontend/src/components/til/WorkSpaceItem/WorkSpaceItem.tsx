import { FC } from "react";
import Button from "../../common/Button/Button";
import * as S from './styles';
import { AiFillGithub } from 'react-icons/ai';
import { MdExpandMore } from 'react-icons/md'
import Link from "next/link";
interface WorkSpaceItemProps{}
const WorkSpaceItem: FC<WorkSpaceItemProps> = () =>{
    function test(e){
        e.preventDefault();
        alert('test');
    }
    return(
        <Link href='test'>
            <S.Block>
                <div className='workspace-header'>
                    <div className='workspace-title'>
                        <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567008394/noticon/ohybolu4ensol1gzqas1.png"></img>
                        <h3>JavaScript</h3>
                    </div>
                    <S.NewLearnButton onClick={test}>New Learn</S.NewLearnButton>
                </div>
                <section>
                    <div className='learn-info'>
                        <p>클로저에 대해 알아보자!</p>     
                        <S.Badge>55m</S.Badge>  
                    </div>
                </section>
                <div className='workspace-footer'>
                    <div className='github-info'>
                        <AiFillGithub />
                        <p>til/javascript</p>
                    </div>
                    <p>Updated 55m ago</p>
                </div>
            </S.Block>
        </Link>
    )
}
export default WorkSpaceItem;