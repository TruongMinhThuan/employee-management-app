import { FirebaseApp } from 'firebase/app';
import { employeeType } from '../types/employee.type';
import firestore, { CollectionReference, addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import firebaseProvider from '../providers/firebase.provider';

class EmployeeService {
    private db = firebaseProvider.firebaseStorageDB
    protected collectionName: string
    protected _refCollection: CollectionReference

    constructor(collectionName = 'employee') {
        this.collectionName = collectionName
        this._refCollection = collection(this.db, this.collectionName)
    }

    public getEmployee = async () => {

        const docRef = collection(this.db, this.collectionName);
        const querySnapshot = await getDocs(docRef);

        let employeeData: employeeType[] = []
        querySnapshot.forEach((doc) => {
            let employeeInfo: employeeType = { id: doc.id, ...doc.data() };
            employeeData.push(employeeInfo)
        });
        return employeeData
    }

    public addEmployee = async (employee: employeeType) => {

        await addDoc(collection(this.db, this.collectionName), employee);
    }

    public updateEmployee = async (employee: employeeType) => {
        const washingtonRef = doc(this.db, this.collectionName, employee.id);

        // Set the "capital" field of the city 'DC'
        await updateDoc(washingtonRef, {
            ...employee
        });

    }

    public deleteEmployee = async (emoloyee: employeeType) => {

        await deleteDoc(doc(this.db, 'employee', emoloyee.id));
    }
}


export default new EmployeeService()