import React from 'react';
import Image from 'next/image';

import './PetItem.css';
import helper from '../util/helper'

import MouseOverPopover from "../util/Tooltip";
import { BonusMap } from "../util/itemMapping";
import petHelper from '../util/petHelper';

const filterBonuses = (bonuses, filterFn) => {
    return bonuses
        .filter(filterFn);
};

type PetItemOptions = {
    petData,
    isSelected?: boolean,
    onClick: React.MouseEventHandler<HTMLDivElement>,
    data?,
    weightMap,
    petScoreFn?: (pet: any) => number,
    defaultRank,
    borderActive?: boolean,
    enabledBonusHighlight?,
    fullPetData?,
    showNameOnly?: boolean,
    grayBackground?: boolean,
    circleBorder?: boolean,
    manualForce?: boolean,
}

const PetItem = ({ petData,
    isSelected,
    onClick,
    data,
    weightMap,
    petScoreFn,
    defaultRank,
    borderActive,
    enabledBonusHighlight,
    fullPetData,
    showNameOnly,
    grayBackground,
    circleBorder,
    manualForce,
}: PetItemOptions) => {
    if (!!data === false) return <div></div>;
    const { petId, location, img, name } = petData;

    // Find the pet from the data.PetsCollection
    const pet = data.PetsCollection.find(p => p.ID === petId);

    if (!pet) return null; // In case the pet is not found in the collection

    // const rank = defaultRank ? defaultRank : pet.Rank;
    const rank = pet.Rank;
    const level = pet.Level;
    const totalScore = helper.formatNumberString(petHelper.getPetDamage(pet, data, rank));

    // const weightedBonuses = filterBonuses(pet.BonusList, (bonus) => {
    //     return bonus.ID < 1000;
    // }).reduce((accum, activePetBonus) => {
    //     const {ID, } = activePetBonus;
    //     const result = weightMap[ID]?.weight;
    //     if (result) accum += result;
    //     return accum;
    // }, 0);

    const weightedActiveScore = petScoreFn ? petScoreFn(pet) : 0;

    const section1Bonuses = (
        <ul
            style={{ margin: '0 0 0 0' }}
        >
            {filterBonuses(pet.BonusList, (bonus) => {
                return bonus.ID < 1000;
            }).map((activePetBonus, i) => {
                // const bonusBase = Number(1.0 + activePetBonus.Gain);
                // const bonusPower = Number(pet.Level === 0 ? 1 : pet.Level);
                // const result = (Math.pow(bonusBase, bonusPower) - 1) * (1 + .02 * Number(pet.Rank));
                const equipedBonus = petHelper.calcEquipBonus(pet, activePetBonus);

                return (
                    <li key={i}>
                        {BonusMap[activePetBonus.ID]?.label}: {helper.formatNumberString(equipedBonus)}
                    </li>
                );
            })}
        </ul>
    );

    const section2Bonuses = (
        <ul
            style={{ margin: '0 0 0 0' }}
        >
            {filterBonuses(pet.BonusList, (bonus) => bonus.ID >= 1000 && bonus.ID < 5000)
                .map((activePetBonus, i) => {
                    return (
                        <li key={i}>
                            {BonusMap[activePetBonus.ID]?.label}: {helper.formatNumberString(Number(activePetBonus.Power)*100) + "%"}
                        </li>
                    );
                })}
        </ul>
    );


    let numHighlights = [];
    if (enabledBonusHighlight) {
        for (const [key, value] of Object.entries(enabledBonusHighlight)) {
            if (value) {
                let found = fullPetData.BonusList.find((a) => a.ID === Number(key));
                if (found) {
                    numHighlights.push(key)
                }
            }
        }
    }

    const scalingOverrides = {
        'Niord': '65px',
        'Cocorico': '63px',
        'Apollo': '60px',
        'Abby': '60px'
    }

    let maxDimension = '';
    if (circleBorder) {
        if (scalingOverrides[name]) {
            maxDimension = scalingOverrides[name];
        }
        else {
            maxDimension = '75px';
        }
    }

    const promotion = pet.promotion ? pet.promotion : 0;

    return (

        <MouseOverPopover
            tooltip={
                <div
                    className="tooltip-custom "
                >
                    <h3
                        style={{ marginTop: '0' }}
                    >
                        <div>
                            {`${name} (${promotion}*) (${totalScore})`}
                        </div>
                        <div>
                            (Level: {level}) (Rank: {pet.Rank})  ({location})
                        </div>
                    </h3>
                    <div>
                        <h4
                            style={{ margin: '6px 0 6px 0' }}
                        >Active Bonuses</h4>
                        {section1Bonuses}
                    </div>
                    <div>
                        <h4
                            style={{ margin: '6px 0 6px 0' }}
                        >Expedition Bonuses:</h4>
                        {section2Bonuses}
                    </div>
                </div>
            }>
            {!showNameOnly && (
                <div style={
                    circleBorder ? {
                        borderRadius: '45px',
                        border: `2px solid ${isSelected ? 'rgba(107, 218,105,0.7)' : 'rgba(218, 53, 34,0.7)'} `,
                        borderLeft: manualForce ? `2px solid yellow` : `2px solid ${isSelected ? 'rgba(107, 218,105,0.7)' : 'rgba(218, 53, 34,0.7)'} `,
                        borderRight: manualForce ? `2px solid yellow` : `2px solid ${isSelected ? 'rgba(107, 218,105,0.7)' : 'rgba(218, 53, 34,0.7)'} `,
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        overflow: 'hidden',
                        // position: 'relative',
                        width: '80px',
                        height: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                        : {}}>
                    <div
                        key={petId}
                        onClick={onClick}
                        style={{
                            display: 'flex',
                            // position: circleBorder ? 'absolute' : '',
                            // top: circleBorder ? '-10px' : ''
                        }}
                        className={`${isSelected ? '' : 'unselected'}`}
                    // className={`item-tile ${isSelected ? '' : 'unselected'}`}
                    >
                        <div
                            className="item-image-container"
                            style={{
                                border: borderActive ? 'black 1px solid' : '',
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                                maxHeight: maxDimension,
                                maxWidth: maxDimension
                            }}>
                            {numHighlights.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            background: helper.bonusColorMap[item].color,
                                            position: 'absolute',
                                            top: '0%',
                                            left: `${(100 / numHighlights.length) * index}%`,
                                            height: '100%',
                                            width: `${100 / numHighlights.length}%`,
                                            zIndex: 1
                                        }}
                                    >

                                    </div>)
                            })}

                            <div
                                style={{
                                    zIndex: '2',
                                    objectFit: 'contain',
                                    position: 'relative',
                                    width: '70px', height: '70px',
                                    maxHeight: circleBorder ? maxDimension : '70px',
                                    maxWidth: circleBorder ? maxDimension : '70px',
                                }}
                            >
                                <Image

                                    style={{
                                        objectFit: 'scale-down',
                                        //   width: 'auto', 
                                        //   height: 'auto' 
                                    }}
                                    fill
                                    alt={`in game image of ${name}`} src={img}
                                    unoptimized={true}
                                />
                            </div>

                            {/* <div className="item-image"> */}
                            {/* <img alt={`in game image of ${name}`} src={img}
                                className={circleBorder ? '' : 'item-image'}
                                style={{
                                    zIndex: '2',
                                    objectFit: 'contain',
                                    maxHeight: circleBorder ? maxDimension : '',
                                    maxWidth: circleBorder ? maxDimension : '',
                                }}
                            /> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            )}

            {showNameOnly && (
                <div
                    style={{
                        width: '100%',
                        backgroundColor: grayBackground ? 'lightgray' : ''
                    }}>
                    {`(${pet.Type === 1 ? 'Ground' : 'Air'}) ${name}`}
                </div>
            )}

        </MouseOverPopover>
    );
};

const StaticPetItem = ({ petData, highlight, showNameOnly }) => {
    const { petId, location, img, name, pet } = petData;
    //ss

    const section1Bonuses = (
        <ul
            style={{ margin: '0 0 0 0' }}
        >
            {filterBonuses(pet.BonusList, (bonus) => {
                return bonus.ID < 1000;
            }).map((activePetBonus, i) => {
                const result = petHelper.calcEquipBonus(pet, activePetBonus);

                return (
                    <li key={i}>
                        {BonusMap[activePetBonus.ID]?.label}: {helper.formatNumberString(result)}
                    </li>
                );
            })}
        </ul>
    );

    const section2Bonuses = (
        <ul
            style={{ margin: '0 0 0 0' }}
        >
            {filterBonuses(pet.BonusList, (bonus) => bonus.ID >= 1000 && bonus.ID < 5000)
                .map((activePetBonus, i) => {
                    return (
                        <li key={i}>
                            {BonusMap[activePetBonus.ID]?.label}: {helper.formatNumberString(Number(activePetBonus.Power))}
                        </li>
                    );
                })}
        </ul>
    );

    let baseDmg: number = petHelper.calculatePetBaseDamage(pet, pet.Rank);
    if (baseDmg < 100) {
        baseDmg = helper.roundInt(baseDmg);
    }
    let promotion = pet.promotion ? pet.promotion : 0;

    return (
        // <div key={petId} className={`static-item-tile`}>
        // <div
        //     className="item-image-container"
        //     style={{
        //         position: 'relative'
        //     }}>

        <MouseOverPopover
            tooltip={
                <div
                    className="tooltip-custom "
                >
                    <h3
                        style={{ marginTop: '0', marginBottom: '3px', textAlign: 'center' }}
                    >
                        {`${name} (${promotion}) -> ${location}`}
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            {`Rank: ${pet.Rank}`}
                        </div>
                        <div style={{ margin: '0 6px' }}>
                            {`Level: ${pet.Level}`}
                        </div>
                        <div>
                            {`Damage: ${helper.formatNumberString(baseDmg)}`}
                        </div>
                    </div>
                    <div>
                        <h4
                            style={{ margin: '6px 0 6px 0' }}
                        >Active Bonuses</h4>
                        {section1Bonuses}
                    </div>
                    <div>
                        <h4
                            style={{ margin: '6px 0 6px 0' }}
                        >Expedition Bonuses:</h4>
                        {section2Bonuses}
                    </div>
                </div>
            }>
            {!showNameOnly && (
                <img alt={`in game image of ${name}`} src={img} className='item-image' />
            )}

            {showNameOnly && (
                <>
                    {name}
                </>
            )}

        </MouseOverPopover>


        //  </div> 
        // </div>
    );
};

export { StaticPetItem };

export default PetItem;
