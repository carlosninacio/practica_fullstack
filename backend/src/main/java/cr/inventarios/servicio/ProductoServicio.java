package cr.inventarios.servicio;

import cr.inventarios.modelo.Producto;
import cr.inventarios.repositorio.ProductoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoServicio implements IProductoServicio {

    @Autowired
    ProductoRepositorio productoRepositorio;

    @Override
    public List<Producto> listarProductos() {
        return this.productoRepositorio.findAll();
    }

    @Override
    public Producto buscarProductoPorId(Integer idProducto) {
        return this.productoRepositorio.findById(idProducto).orElse(null);
    }

    @Override
    public void guardarProducto(Producto producto) {
        productoRepositorio.save(producto);
    }

    @Override
    public void eliminarProductoPorId(Integer idProducto) {
        productoRepositorio.deleteById(idProducto);
    }
}
