import DS from 'ember-data';


export default DS.Model.extend({
    availableRooms: DS.attr('number'),
    underRepair: DS.attr('number'),
    occupied: DS.attr('number'),
    paidOccupied: DS.attr('number'),
    unpaidOccupied: DS.attr('number'),
    unOccupied: DS.attr('number'),
    revPar: DS.attr('number'),
    percentOccupancy: DS.attr('number'),
    percentVacant: DS.attr('number'),
    percentRepair: DS.attr('number')
});
