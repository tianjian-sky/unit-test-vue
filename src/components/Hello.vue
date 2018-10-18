
<script>
import { EditableDiv } from '../lib/editableDiv.js'

    export default {
        template: `
            <div>
                <span class="count">{{ count }}</span>
                <button @click="increment">Increment</button>
                <div>
                    <ul>
                        <li v-for="(item, index) in list" contenteditable="true">
                            <div>{{item}}</div>
                            <button @click="moveup" :data-index="index">上移动选项</button>
                            <button @click="movedown" :data-index="index">下移动选项</button>
                        </li>
                    </ul>
                    <hr>
                    <hr>
                    <h3>计算属性:{{now}}</h3>
                    <ul>
                        <li v-for="(item, index) in list2" contenteditable="true">
                            <q-option :id="'inqOption_' + index" :initialValue="item" :data-optionIndex="index"></q-option>
                            <button @click="moveupOp" :data-index="index">上移动选项</button>
                            <button @click="movedownOp" :data-index="index">下移动选项</button>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        components: {
            'q-option' : EditableDiv({
                classList: ['optionLabel', 'fl'],
                maxInputLen: 200,
                placeholderText: ''
            })
        },
        data () {
            return {
                count: 0,
                list: ['Beijing', 'Shanghai', 'Guangzhou'],
                list2: ['选项1', '选项2', '选项3']
            }
        },
        computed: {
            now () {
                console.log('重新计算计算属性:')
                return new Date()
            }
        },
        methods: {
            increment () {
                this.count++
            },
            moveup (e) {
                let index = e.target.dataset.index * 1
                let curEle = this.list[index]
                this.list.splice(index - 1, 0, curEle)
                this.list.splice(index + 1, 1)
            },
            movedown (e) {
                let index = e.target.dataset.index * 1
                let curEle = this.list[index]
                this.list.splice(index + 2, 0, curEle)
                this.list.splice(index, 1)
            },
            moveupOp (e) {
                let index = e.target.dataset.index * 1
                let curEle = this.list2[index]
                console.log(curEle, index)
                this.list2.splice(index - 1, 0, curEle)
                this.list2.splice(index + 1, 1)
            },
            movedownOp (e) {
                let index = e.target.dataset.index * 1
                let curEle = this.list2[index]
                console.log(curEle, index)
                this.list2.splice(index + 2, 0, curEle)
                this.list2.splice(index, 1)
            }
        }
    }
</script>